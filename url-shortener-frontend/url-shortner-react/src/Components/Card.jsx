import React from 'react'
import { motion } from "framer-motion";

const Card = ({title, desc}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }} className='shadow-md shadow-slate-400 border border-slate-400 flex flex-col px-4 py-8 gap-3 rounded-sm'>
        <h1 className='text-slate-900 text-xl font-bold text-center'>{title}</h1>
        <p className='text-slate-700 text-sm text-center'>{desc}</p>
    </motion.div>
  )
}

export default Card