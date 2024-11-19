import React, { useState, useEffect } from 'react';

function Gallery() {
    const [tours, setTours] = useState([]); //sets tours as our initial variable, with the default tours being blank

    const notInterested = (id) => {
        setTours((prevTours) => prevTours.filter((tour) => tour.id !== id))
    }

    useEffect(() => {
        fetch('https://www.course-api.com/react-tours-project') //fetch tours from API
            .then(response => response.json()) //turn API into JSON format
            .then(data => setTours(data)) //add tours to the tours array
            .catch(error => console.error('Error Fetching Tours:', error))
        }, []);

    return (
        <div>
            <h2>Tours</h2>
            <ul>
                {tours.map(tour => (
                    <li key={tour.id}>
                        {tour.name} - ${tour.price}
                        <p>{tour.info}</p>
                        <img src={tour.image}></img>
                        <br></br>
                        <button onClick={() => notInterested(tour.id)}>Not Interested</button>
                        <p></p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Gallery;