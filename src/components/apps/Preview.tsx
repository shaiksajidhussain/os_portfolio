import React from "react";

export default function Preview() {
  // Convert Google Drive share link to preview URL
  // Original: https://drive.google.com/file/d/1qpAX_ea2k-PmxlpA3ZFmeMYO0h3MqkrB/view?usp=drive_link
  // Preview: https://drive.google.com/file/d/1qpAX_ea2k-PmxlpA3ZFmeMYO0h3MqkrB/preview
  const pdfUrl =
    "https://drive.google.com/file/d/1qpAX_ea2k-PmxlpA3ZFmeMYO0h3MqkrB/preview";

  return (
    <div className="w-full h-full bg-gray-100 dark:bg-gray-900">
      <iframe
        src={pdfUrl}
        className="w-full h-full border-0"
        title="Resume Preview"
        style={{ minHeight: "100%" }}
      />
    </div>
  );
}
