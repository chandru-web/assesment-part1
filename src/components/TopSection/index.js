
import {
  FaFacebook,
  FaInstagram,
  FaRupeeSign,
  FaArrowRight,
} from 'react-icons/fa'
import {IoMdArrowDropdown} from 'react-icons/io'
import {FaCircleMinus, FaSquarePlus} from 'react-icons/fa6'
import {Component} from 'react'
import './index.css'

class TopSection extends Component {
  state = {
    roomsCount: 1,
    isBooked: false,
    isBookingConfirmed: false,
  }

  onGoToPayment = () => {
    this.setState(prevState => ({
      isBookingConfirmed: !prevState.isBookingConfirmed,
    }))
  }

  onIncreaseRoom = () => {
    this.setState(prevState => ({
      roomsCount: prevState.roomsCount + 1,
    }))
  }

  onDecreaseRoom = () => {
    const {roomsCount} = this.state
    if (roomsCount > 1) {
      this.setState(prevState => ({
        roomsCount: prevState.roomsCount - 1,
      }))
    }
  }

  bookRoom = () => {
    this.setState(prevState => ({
      isBooked: !prevState.isBooked,
    }))
  }

  renderBookButton = () => (
    <div className="book-button-container col-5 col-md-3">
      <button type="button" className="booking-button" onClick={this.bookRoom}>
        Book
      </button>
    </div>
  )

  renderGoToBookButton = () => (
    <div className="col-5 col-md-3 go-to-book-button">
      <button
        className="amount-button"
        type="button"
        onClick={this.onGoToPayment}
      >
        <FaRupeeSign />
        <span className="amount-value">12,430</span>
        <FaArrowRight />
      </button>
      <p className="click-to-pay">Click to pay token amount</p>
    </div>
  )

  renderBeforeBooking = () => (
    <>
      <div className="col-12 col-md-6 text-container">
        <h1 className="work-from-ladakh">Work From Ladakh</h1>
        <p className="description">
          India's first true digital tourism ecosystem
        </p>
        <div className="logo-container">
          <FaFacebook className="fa-icon" />
          <FaInstagram className="in-icon" />
        </div>
      </div>
      <div className="col-12 col-md-6 image-container">
        <img
          src="https://media.istockphoto.com/id/1297500238/photo/spituk-gompa-indus-valley-near-leh-ladakh-india.jpg?s=2048x2048&w=is&k=20&c=oTNZariaQ17ED3EFnLqKyNgA2OpFWLxga2BJlzr__pk="
          alt="ladakh"
          className="ladakh-image"
        />
      </div>
      {this.renderBookingSection()}
    </>
  )

  renderBookingSection = () => {
    const {roomsCount, isBooked, isBookingConfirmed} = this.state
    return (
      <div className="booking-container container">
        <div className="row">
          <div className="check-in-container col-5 col-md-3">
            <h1 className="check-in">CHECK-IN</h1>
            <p className="date">
              <span>01 Feb 2022</span>
              <IoMdArrowDropdown />
            </p>
          </div>
          <div className="check-out-container col-5 col-md-3">
            <h1 className="check-out">CHECK-OUT</h1>
            <p className="date">
              <span>07 Feb 2022</span>
              <IoMdArrowDropdown />
            </p>
          </div>

          {isBookingConfirmed ? (
            this.renderRoomConfirm()
          ) : (
            <div className="rooms-container col-5 col-md-3">
              <h1 className="rooms">Rooms</h1>
              <div className="rooms-count-container">
                <button
                  type="button"
                  className="button-minus"
                  onClick={this.onDecreaseRoom}
                >
                  <FaCircleMinus />
                </button>
                <p className="rooms-count">{roomsCount}</p>
                <button
                  type="button"
                  className="button-plus"
                  onClick={this.onIncreaseRoom}
                >
                  <FaSquarePlus />
                </button>
              </div>
            </div>
          )}

          {!isBooked && !isBookingConfirmed && this.renderBookButton()}
          {isBooked && !isBookingConfirmed && this.renderGoToBookButton()}
          {isBooked && isBookingConfirmed && this.renderBookingConfirmButton()}
        </div>
      </div>
    )
  }

  renderAfterBooking = () => (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 details-container">
            <p className="name">Amit Jha</p>
          </div>
          <div className="col-12 col-md-5 details-container">
            <p className="email">amit.jha6700@gmail,com</p>
          </div>
          <div className="col-12 col-md-5 details-container">
            <p className="phone-number">+91 - 7764997022</p>
          </div>
          <div className="col-6 col-md-3 details-container">
            <p className="adult">1 Adult</p>
          </div>
          <div className="col-6 col-md-3 details-container">
            <p className="children">2 Children</p>
          </div>
        </div>
        {this.renderBookingSection()}
      </div>
    </div>
  )

  renderBookingConfirmed = () => (
    <>
      <div className="col-12 col-md-6 address-container">
        <h1 className="name">Amit Jha</h1>
        <p className="phone-number">+91 - 7764997022</p>
        <p className="email">amit.jha6700@gmail.com</p>
        <p className="children">1 Adults and 2 Children</p>
      </div>
      <div className="order-complete-container col-12 col-md-6">
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/25/86/12/1000_F_125861263_Hkkn26VyuQG3D4csFWlqpigwddNbVsZc.jpg"
          alt="complete"
          className="right-tick-image"
        />
        <div>
          <h1 className="order-complete">Order Complete</h1>
          <p className="have-questions">have questions?</p>
          <p className="contact-us">Contact Us</p>
        </div>
      </div>
      {this.renderBookingSection()}
    </>
  )

  renderRoomConfirm = () => {
    const {roomsCount} = this.state
    return (
      <div className="rooms-container col-12 col-md-3">
        <h1 className="rooms">Rooms</h1>
        <p className="rooms-count">{roomsCount}</p>
      </div>
    )
  }

  renderBookingConfirmButton = () => (
    <div className="booking-confirm-button-container col-12 col-md-3">
      <button type="button" className="confirm-button">
        $ 12,430
      </button>
    </div>
  )

  render() {
    const {isBooked, isBookingConfirmed} = this.state
    return (
      <>
        <div className="top-section-container container">
          <div className="row align-items-center">
            {!isBooked && !isBookingConfirmed && this.renderBeforeBooking()}
            {isBooked && !isBookingConfirmed && this.renderAfterBooking()}
            {isBooked && isBookingConfirmed && this.renderBookingConfirmed()}
          </div>
        </div>
      </>
    )
  }
}

export default TopSection
