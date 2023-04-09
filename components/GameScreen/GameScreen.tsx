import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState } from "react"
import Button from "../Button"

const GameScreen = () => {
  const [spotifyLink, setSpotifyLink] = useState("")
  const router = useRouter()

  const onSubmit = () => {
    const trackId = "0PS5LgbBgRssKAx5ZUZoD5"
    router.push(`https://moonwalk-game.herokuapp.com/?spotifyTrackId=${trackId}`)
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
        <h1 className="text-2xl font-bold text-center">Increase streams up to 10x</h1>
        <h1 className="text-2xl font-bold text-center">Turn any song into a video game.</h1>
        <h1 className="text-2xl font-bold text-center">Link content, select game, sync streams.</h1>
      </div>
      <div className="flex items-center justify-center mt-8">
        <input
          className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-lg"
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
          className="bg-blue-500 hover:bg-blue-700 text-white text-7xl font-bold py-2 px-4 rounded"
          onClick={() => onSubmit()}
        >
          Sync
        </Button>
      </div>
    </div>
  )
}

export default GameScreen
