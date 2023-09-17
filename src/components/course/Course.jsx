import PropTypes from "prop-types";
import { FiDollarSign } from 'react-icons/fi';
import { IoBookOutline } from 'react-icons/io5';
const Course = ({ course,handleSelect }) => {
  const {course_title,description,img,price,credit} = course;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="pt-4">
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title text-[#1C1B1B]">{course_title}</h2>
        <p className=" text-[#1C1B1B99] text-sm font-normal leading-6">{description}</p>
        <div className="flex mt-4 mb-4">
        <div className="w-7/12">
            <p className=" text-[#1C1B1B99] text-base font-medium flex items-center gap-3"><FiDollarSign />Price: {price}</p>
        </div>
        <div className="flex justify-end">
            <p className=" text-[#1C1B1B99] text-base font-medium flex items-center gap-3"><IoBookOutline/>Credit: {credit}hr</p>
        </div>
        </div>
        <div className="card-actions h-10">
          <button onClick={() => handleSelect(course)} className="w-full h-full text-[#FFF] text-lg font-semibold rounded-lg border border-[#2F80ED] bg-[#2F80ED]">Select</button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    course_title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    credit: PropTypes.number,
    handleSelect: PropTypes.func
}

export default Course;
