import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import vid1 from "../resources/vid1.mp4"
import vid2 from "../resources/vid2.mp4"
import vid3 from "../resources/vid3.mp4"
import vid4 from "../resources/vid4.mp4"

const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [ videoIndex, setVideoIndex ] = useState(0)

    const videos: string[] = [ vid1, vid2, vid3, vid4, ]

    const handleVideoEnd = () => {
        const nextIndex = (videoIndex + 1) % videos.length
        setVideoIndex(nextIndex)
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load()
            videoRef.current.play()
            videoRef.current.addEventListener('ended', handleVideoEnd)
        }

        return () => {
            videoRef.current?.removeEventListener('ended', handleVideoEnd)
        }
        /*
        videoRef.onended = () => {
            const nextIndex = ( videoIndex + 1) % videos.length
            setVideoIndex(nextIndex)
        }
        */
    }, [videoIndex])

  return (
    <div className='h-[60vh] md:h-[85vh] bg-black w-full'>

        <AnimatePresence>
            <motion.video 
                ref={videoRef}
                key={videoIndex}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.5}} 
                muted
                autoPlay
                className='w-full h-[80vh] md:h-[100vh] absolute top-0 left-0 object-cover'
            >
                <source src={videos[videoIndex]} type="video/mp4" />
            </motion.video>
        </AnimatePresence>

    </div>
  )
}

export default Hero