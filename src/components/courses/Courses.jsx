import { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Course from "../course/course";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [cartCourse, setCartCourse] = useState([]);
    useEffect(()=>{
        fetch('CourseData.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    const handleSelect = (course) => {
        // Check if the course is already in the cart
        const isDuplicate = cartCourse.some((cart) => cart.id === course.id);

        if (!isDuplicate && (TotalCredit+course.credit) <= 20) {
          // Add the course to the cart if it's not a duplicate
          setCartCourse([...cartCourse, course]);
        } else if(!isDuplicate && (TotalCredit+course.credit) >= 20) {
          // Display an alert if it's a duplicate
          alert('You are out of Credit!');
        }
        else {
            alert('This is duplicet!')
        }
      };
      
        let TotalPrice = 0;
        let TotalCreditRmain = 20;
        let TotalCredit = 0;
        cartCourse.map((course) => {
            TotalCreditRmain -= course.credit
            TotalPrice += course.price
            TotalCredit += course.credit
        });

    return (
        <div className="pt-4">
            <div><h3 className=' text-3xl font-bold text-[#1C1B1B] text-center'>Course Registration</h3></div>
            <div className=" flex flex-col-reverse lg:flex-row p-4">
                <div className=" lg:w-3/4 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8 px-6">
                {
                        courses.map( course => 
                        <Course
                        key={course.id}
                        course={course}
                        handleSelect={handleSelect}
                        ></Course>)
                    } 
                </div>
                <div className=" lg:w-1/4 w-full h-96 grid grid-cols-1 mt-8 p-6 rounded-xl bg-[#FFF] shadow-xl">
                    <Cart
                    cartCourse={cartCourse}
                    TotalCreditRmain={TotalCreditRmain}
                    TotalPrice={TotalPrice}
                    TotalCredit={TotalCredit}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Courses;