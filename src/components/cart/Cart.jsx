import PropTypes from 'prop-types'
const Cart = ({cartCourse,TotalCreditRmain,TotalPrice,TotalCredit}) => {

    return (
        <div className="">
            <h3 className="text-lg text-[#2F80ED] font-bold pb-3 mb-3 border-b border-gray-400">Creadit Hour Remaining {TotalCreditRmain} hr</h3>
            <h3 className="text-[#1C1B1B] text-xl font-bold">Course Name </h3>
            {
                cartCourse.map((course,idx) => <p key={idx} className='text-[#1C1B1B60]'>{idx+1}. {course.course_title}</p>)
            }
            <h4 className="text-base font-medium text-black mt-3 mb-3 border p-2 border-l-0 border-r-0 border-t-gray-500 border-b-gray-500">Total Credit Hour : {TotalCredit}</h4>
            <h4 className="text-base font-medium text-black mt-3 mb-3 p-2">Total Price: {TotalPrice} USD</h4>
        </div>
    );
};

Cart.propTypes = {
    cartCourse: PropTypes.array.isRequired,
    TotalCreditRmain: PropTypes.number.isRequired,
    TotalPrice: PropTypes.number.isRequired,
    TotalCredit: PropTypes.number.isRequired
}

export default Cart;