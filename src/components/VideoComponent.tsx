'use client';

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="mx-auto w-full max-w-4xl rounded-lg shadow-xl"
        poster="/videos/poster.jpg" // Opcional: imagen de previsualización
      >
        <source src="/videos/video1.MOV" type="video/quicktime" />
        <p>
          Tu navegador no soporta videos .MOV. Descarga el
          <a href="/videos/video1.MOV" className="text-blue-500 hover:underline">
            {' '}
            video aquí
          </a>
        </p>
      </video>
    </div>
  );
};

export default VideoComponent;
