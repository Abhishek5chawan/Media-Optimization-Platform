'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function VideoUpload() {

  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)  // State to track upload success
  const [uploadError, setUploadError] = useState(false)  // State to track upload error

  const router = useRouter()
  
  // Max file size of 60mb
  const MAX_FILE_SIZE = 60 * 1024 * 1024

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    if (file.size > MAX_FILE_SIZE) {
      // Add notification (this can be replaced with a notification UI component)
      alert("File size too large")
      return
    }

    setIsUploading(true)
    const formData = new FormData()
    formData.append("file", file)
    formData.append("title", title)
    formData.append("description", description)
    formData.append("originalSize", file.size.toString())

    try {
      const response = await axios.post("/api/video-upload", formData)

      // Check for successful response and set uploadSuccess state
      if (response.status === 200) {
        setUploadSuccess(true)
        setUploadError(false)
      } else {
        setUploadSuccess(false)
        setUploadError(true)
      }
    } catch (error) {
      console.log(error)
      setUploadSuccess(false)
      setUploadError(true)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Video</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Video File</span>
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="file-input file-input-bordered w-full"
            required
          />
        </div>

        {/* Uploading Animation: Spinner or Progress bar */}
        {isUploading && (
          <div className="mt-4">
            <div className="flex justify-center items-center space-x-2">
              <span className="loading loading-spinner loading-lg"></span>
              <span>Uploading...</span>
            </div>
          </div>
        )}

        {/* Success or Error Message */}
        {uploadSuccess && (
          <div className="mt-4 text-green-600 font-semibold">
            Video uploaded successfully!
          </div>
        )}
        {uploadError && (
          <div className="mt-4 text-red-600 font-semibold">
            Something went wrong. Please try again.
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary mt-4"
          disabled={isUploading}
        >
          {isUploading ? "Uploading..." : "Upload Video"}
        </button>
      </form>
    </div>
  );
}

export default VideoUpload;
