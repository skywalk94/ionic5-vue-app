import {
    Plugins,
    CameraResultType,
    CameraSource
} from "@capacitor/core";

export function usePhotoGallery() {
    const {
        Camera
    } = Plugins;

    const takePhoto = async () => {
        await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100
        });
    };

    return {
        takePhoto
    };
}