type CameraConfigType = {
    cameraConfigVideoProcessor: string
    cameraConfigSource: string
    cameraConfigStillImageSource?: string
    cameraConfigMaxStreams: number
    cameraConfigMaxWidth: number
    cameraConfigMaxHeight: number
    cameraConfigMaxFPS: number
    cameraConfigMaxBitrate: number
    cameraConfigVideoCodec: string
    cameraConfigAudioCodec: string
    cameraConfigAudio: string
    cameraConfigPacketSize: number
    cameraConfigVerticalFlip: boolean
    cameraConfigHorizontalFlip: boolean
    cameraConfigMapVideo: string
    cameraConfigMapAudio: string
    cameraConfigVideoFilter: string
    cameraConfigAdditionalCommandLine: string
    cameraConfigDebug: boolean
    cameraConfigSnapshotOutput: string
    cameraConfigInterfaceName: string
}

export default CameraConfigType
