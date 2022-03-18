import { fireEvent } from './fireEvent'
import { getParcel } from '@decentraland/ParcelIdentity'
import { registerBasicTracking } from './pixelTracking'

export const registerDclEvents = async () => {

    let enterTime = 0.0
    let connectionTime = 0.0

    const parcel = await getParcel()
    const { cid: parcelId } = parcel
    const itemId = 'dcl:' + parcel.land.sceneJsonData.scene.base

    // event tracking
    onEnterSceneObservable.add(async (player) => {
        enterTime = Date.now()
        log('enter!!!')
        fireEvent('enterLand',{itemId})
    })

    onLeaveSceneObservable.add(player => {
        const duration = Math.floor(Date.now() - enterTime)
        fireEvent('visitDuration', {itemId, duration})
    })

    onPlayerConnectedObservable.add(player => {
        connectionTime = Date.now()
        fireEvent('connectLand',{itemId})
    })

    onPlayerDisconnectedObservable.add(player => {
        const duration = Math.floor(Date.now() - connectionTime)
        fireEvent('connectionDuration', {itemId, duration})
    })

    registerBasicTracking()

    return {parcelId, itemId}
}
