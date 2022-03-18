export const registerBasicTracking = (itemId: string) =>  {
  // TODO base url as ENV variable
  const cloudServerBaseUrl = `https://europe-west3-backend-339310.cloudfunctions.net`

  // TODO create default imageId
  const trackingUrl = `${cloudServerBaseUrl}/serve/${itemId}.jpg`

  const pixel = new Entity()
  const material = new BasicMaterial()

  material.texture = new Texture(trackingUrl, {wrap: 0})
  pixel.addComponent(material)
  pixel.addComponent(new Transform({position: new Vector3(0, 0, 0)}))

  engine.addEntity(pixel)
}
