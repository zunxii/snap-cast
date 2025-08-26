import { useRef, useState } from "react"

export const useFileInput = (maxSize : number) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [duration, setDuration] = useState(0);
  const inputRef = useRef(null);

  const handleFileChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > maxSize) {
        alert(`File size exceeds the limit of ${maxSize / (1024 * 1024)} MB.`);
        return;
      }
      if(previewUrl) URL.revokeObjectURL(previewUrl);
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);

      if (selectedFile.type.startsWith('video')) {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = url;
        video.onloadedmetadata = () => {
            if(isFinite(video.duration) && video.duration > 0){
                setDuration(Math.round(video.duration));
            }else{
                setDuration(0);
            }
            URL.revokeObjectURL(video.src);
        };
      }
    }
  };
  const resetFile = () => {
    if(previewUrl) URL.revokeObjectURL(previewUrl);
    setFile(null);
    setPreviewUrl('');
    setDuration(0);
    if(inputRef.current) (inputRef.current as HTMLInputElement).value = '';
  };

  return {
    file,
    previewUrl,
    duration,
    inputRef,
    handleFileChange,
    resetFile,
  }
}
