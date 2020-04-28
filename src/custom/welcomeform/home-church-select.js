import React, { Fragment } from 'react'

export default function HomeChurchSelectOption({ grp_Location, location_Details }) {
    return (
        <Fragment>
            {location_Details.map(({ id, ...cell }) => (
                <option value="" key={id}>{grp_Location} {cell.address} {cell.leader} </option>
            ))}

        </Fragment>
    )
}
