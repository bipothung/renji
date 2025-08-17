"use client";
import { useRef, useState, useEffect } from "react";

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const [showModal, setShowModal] = useState(true); // State to control the modal visibility

  // Set up the audio player when component mounts
  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.09; // Set volume to 5%
    audio.loop = true; // Set the audio to loop
  }, []);

  // Handle the user interaction to play the audio
  const handlePlayAudio = () => {
    const audio = audioRef.current;
    audio
      .play()
      .then(() => {
        setIsAudioReady(true); // Audio is now ready and playing
        setShowModal(false); // Close the modal after playing
      })
      .catch((error) => {
        console.error("Error starting audio:", error);
      });
  };

  // Handle user clicking "Cancel"
  const handleCancelAudio = () => {
    setShowModal(false); // Close the modal without playing audio
  };

  return (
    <div className="text-center">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-gray-800 p-8 rounded-lg text-center text-white">
            <h2 className="text-2xl mb-6 font-semibold">
              Do you want background music?
            </h2>
            <div>
              <button
                onClick={handlePlayAudio}
                className="bg-indigo-600 text-white py-2 px-6 rounded-lg mr-4 hover:bg-indigo-700 transition-all"
              >
                Play Music
              </button>
              <button
                onClick={handleCancelAudio}
                className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-all"
              >
                No, thanks
              </button>
            </div>
          </div>
        </div>
      )}

      <audio ref={audioRef} src="/teck.mpeg" loop />
    </div>
  );
}
