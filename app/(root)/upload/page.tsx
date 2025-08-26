'use client'
import { FileInput, FormField } from '@/components'
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from '@/constants'
import { useFileInput } from '@/lib/hooks/useFileInput'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
    const [formData, setFormData] = useState<VideoFormValues>({
    title: "",
    description: "",
    tags: "",
    visibility: "public",
  });


  const video = useFileInput(MAX_VIDEO_SIZE);

  const thumbnail =useFileInput(MAX_THUMBNAIL_SIZE);


  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e : FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if(!video.file && !thumbnail.file){
        setError("Please select a video and thumbnail to upload.");
        setIsSubmitting(false);
        return;
      }
      if(!formData.title || !formData.description){
        setError("Please fill in all required fields.");
        setIsSubmitting(false);
        return;
      }
      //upload video
      //upload thumbnail
      //attach thumbnail
      //Create a new DB entry for the video details(urls, data)
    } catch (error) {
      console.error("Upload error:", error);
    }finally{
      setIsSubmitting(false);
    }
  }
  
  return (
    <main className='upload-page wrapper-md'>
         <h1>Upload a video</h1>
         {error && <div className='error-field'>{error}</div>}

         <form className='rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5' onSubmit={handleSubmit}>

        <FormField
            id="title"
            label="Title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter a clear and concise video title"
            />
        <FormField
          id="description"
          label="Description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Briefly describe what this video is about"
          as="textarea"
          />
         <FileInput
          id="video"
          label="Video"
          accept="video/*"
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type="video"
          />
          
          <FileInput
          id="thumbnail"
          label="Thumbnail"
          accept="image/*"
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type="image"
          />
          
          <FormField
          id="visibility"
          label="Visibility"
          value={formData.visibility}
          onChange={handleInputChange}
          as="select"
          options={[
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
            ]}
            />   

            <button className='submit-button' type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Uploading...' : 'Upload Video'}
              </button>    
      </form>
    </main>
  )
}

export default page
