import type {
  DigitalObject,
  LinkedArtObject,
  SearchResponse,
  VisualItem,
} from "../types/linked-art";

export async function getRijksmuseumImage(): Promise<string | undefined> {
  const response: Response = await fetch(
    "https://data.rijksmuseum.nl/search/collection?creator=Vermeer&title=Het%20straatje",
  );
  const orderedCollection: SearchResponse = await response.json();
  const objectURL: string = orderedCollection.orderedItems?.[0]?.id;

  if (!objectURL) {
    return undefined;
  }

  const objectResponse: Response = await fetch(
    `${objectURL}?_profile=la-framed`,
  );
  const linkedArtObjectRepresentation: LinkedArtObject =
    await objectResponse.json();
  const visualItemURL: string | undefined =
    linkedArtObjectRepresentation.shows?.[0]?.id;

  if (!visualItemURL) {
    return undefined;
  }

  const visualResponse: Response = await fetch(visualItemURL);
  const linkedArtVisualItemRepresentation: VisualItem =
    await visualResponse.json();
  const digitalObjectURL: string | undefined =
    linkedArtVisualItemRepresentation.digitally_shown_by?.[0]?.id;

  if (!digitalObjectURL) {
    return undefined;
  }

  const digitalResponse: Response = await fetch(digitalObjectURL);
  const linkedArtDigitalObjectRecord: DigitalObject =
    await digitalResponse.json();
  return linkedArtDigitalObjectRecord.access_point?.[0]?.id;
}
