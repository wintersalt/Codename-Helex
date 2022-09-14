import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import { format } from 'date-fns'
import './Header.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

type IDate = {
  startDate?: Date | undefined
  endDate?: Date | undefined
  key?: string | undefined
}

type IProps = {
  type?: string
}

const Header = ({ type }: IProps) => {
  const [openDate, setOpenDate] = useState<boolean>(false)
  const [openOptions, setOpenOptions] = useState<boolean>(false)
  const [options, setOptions] = useState<any>({
    adults: 1,
    children: 0,
    rooms: 1,
  })
  const [date, setDate] = useState<[IDate]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])

  const handleOption = (name: string, operation: string) => {
    setOptions((prev: any) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  return (
    <div className='header'>
      <div
        className={
          type === 'list' ? 'headerContainer listMode' : 'headerContainer'
        }
      >
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            <h1 className='headerTitle'>
              A lifetime of discounts? It's Genius.
            </h1>
            <p className='headerDesc'>
              Get reward for your travels - unlock intant savings of 10% or more
              with a free Wsbooking account
            </p>
            <button className='headerBtn'>Sign In / Register</button>
            <div className='headerSearch'>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input
                  type='text'
                  placeholder='Where are you going?'
                  className='headerSearchInput'
                />
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                <span
                  className='headerSearchText'
                  onClick={() => {
                    setOpenDate(!openDate)
                    setOpenOptions(false)
                  }}
                >
                  {`${format(Number(date[0].startDate), 'MM/dd/yyyy')}`} to{' '}
                  {`${format(Number(date[0].endDate), 'MM/dd/yyyy')}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                  />
                )}
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span
                  className='headerSearchText'
                  onClick={() => {
                    setOpenOptions(!openOptions)
                    setOpenDate(false)
                  }}
                >
                  {`${options.adults}`} adult · {`${options.children}`} children
                  · {`${options.rooms}`} room
                </span>
                {openOptions && (
                  <div className='optionsModal'>
                    <div className='optionsModal__item'>
                      <span>Adults</span>
                      <div className='optionsModal__item__buttons'>
                        <button
                          disabled={options.adults <= 1}
                          onClick={() => handleOption('adults', 'd')}
                        >
                          -
                        </button>
                        <span>{options.adults}</span>
                        <button onClick={() => handleOption('adults', 'i')}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className='optionsModal__item'>
                      <span>Children</span>
                      <div className='optionsModal__item__buttons'>
                        <button
                          disabled={options.children <= 0}
                          onClick={() => handleOption('children', 'd')}
                        >
                          -
                        </button>
                        <span>{options.children}</span>
                        <button onClick={() => handleOption('children', 'i')}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className='optionsModal__item'>
                      <span>Rooms</span>
                      <div className='optionsModal__item__buttons'>
                        <button
                          disabled={options.rooms <= 1}
                          onClick={() => handleOption('rooms', 'd')}
                        >
                          -
                        </button>
                        <span>{options.rooms}</span>
                        <button onClick={() => handleOption('rooms', 'i')}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='headerSearchItem'>
                <button className='headerBtn'>Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
