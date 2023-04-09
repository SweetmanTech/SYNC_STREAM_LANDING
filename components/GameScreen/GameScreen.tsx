import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState } from "react"
import Button from "../Button"

const GameScreen = () => {
  const [spotifyLink, setSpotifyLink] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // TOCO: abstrat to util
  const getTrackId = (spotifyShareUrl: string) => {
    const startIndex = spotifyShareUrl.indexOf("track/") + 6
    const endIndex = spotifyShareUrl.indexOf("?")
    return spotifyShareUrl.substring(startIndex, endIndex)
  }

  const onSubmit = async () => {
    setLoading(true)
    console.log("spotifyLink", spotifyLink)
    const trackId = getTrackId(spotifyLink)

    console.log("trackId", trackId)
    await router.push(`https://moonwalk-game.herokuapp.com/?spotifyTrackId=${trackId}`)
    setLoading(false)
  }

  const handleInputChange = (event) => {
    setSpotifyLink(event.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit()
    }
  }

  return (
    <div>
      <div className="flex justify-start items-center p-4">
        <Image src="/images/logo.png" alt="Logo" width={202.5} height={37.5} />
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl font-bold text-center">Increase streams up to 10x.</h1>
        <h1 className="text-2xl font-bold text-center">Turn any song into a video game.</h1>
        <h1 className="text-2xl font-bold text-center">Link content, select game, sync streams.</h1>
      </div>
      <div className="flex items-center justify-center mt-8">
        <input
          className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-lg bg-[#efedf3]"
          placeholder="Enter Spotify Song Link Here"
          value={spotifyLink}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="flex items-center justify-center mt-8">
        <Image
          className="rounded-md mx-2"
          src="/images/game-options.png"
          alt="Game 1"
          width={657}
          height={210}
        />
      </div>
      <div className="flex items-center justify-center mt-8">
        <Button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onSubmit()}
        >
          {loading ? (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            "Sync"
          )}
        </Button>
      </div>
    </div>
  )
}

export default GameScreen
