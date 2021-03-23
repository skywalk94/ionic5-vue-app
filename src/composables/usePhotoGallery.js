import {
    ref,
    onMounted,
    watch
} from 'vue';
import {
    Plugins,
    CameraResultType,
    CameraSource,
    CameraPhoto,
    Capacitor,
    FilesystemDirectory
} from "@capacitor/core";

export function usePhotoGallery() {
    const {
        Camera
    } = Plugins;

    const takePhoto = async () => {
        const cameraPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100
        });
    };

    return {
        takePhoto
    };
}