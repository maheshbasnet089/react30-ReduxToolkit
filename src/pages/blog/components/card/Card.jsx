import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  
  return (
  <Link to="/blog/id">
      <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
    <img class="w-full" src="https://images.emojiterra.com/google/android-12l/512px/1f9d9-2642.png" alt="Sunset in the mountains" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </div>
  </Link>
  )
}

export default Card