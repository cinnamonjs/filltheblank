import { motion } from 'framer-motion'

export default function Obj(props: {position: { x: number, y: number }, speedx: number, speedy: number, size: string, location: string, color: string}) {
    return (
        <motion.div className={`${props.location} absolute blur ${props.color} ${props.size}`} 
        animate={{
          x: props.position.x * props.speedx,
          y: props.position.y * props.speedy,
          transition: {
            delay: 0,
            type: 'tween',
            duration: 0.7,
          }
        }}
        />
    )
}