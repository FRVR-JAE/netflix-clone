import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Pagination,Navigation } from "swiper";


const MovieList = (props) => {
  return (
	<>	
	
	<Swiper
	slidesPerView={5}
	spaceBetween={30}
	slidesPerGroup={5}
	loop={true}
	loopFillGroupWithBlank={true}
	pagination={{
	  clickable: true,
	}}
	navigation={true}
	modules={[Pagination, Navigation]}
	className="mySwiper"
  >
	{(props.searchMovies || props.movies).map((movie, index) => (
	
        <SwiperSlide>
		<img src={movie.Poster} alt="" />
		</SwiperSlide>
		
	))}
	</Swiper>
</>
  )
}

export default MovieList
