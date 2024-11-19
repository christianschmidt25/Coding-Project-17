import React, { useState, useEffect } from 'react';

function Gallery() {
    const [tours, setTours] = useState([]); //sets tours as our initial variable, with the default tours being blank

    const notInterested = (id) => {
        setTours((prevTours) => prevTours.filter((tour) => tour.id !== id)) //when selecting this button underneath the tour (associated by ID), it will filter out and remove from the tour list.
    };

    const toggleExpanded = (id) => {
        setTours((prevTours) =>
            prevTours.map((tour) =>
                tour.id === id ? { ...tour, expanded: !tour.expanded } : tour //ternary operator to either show expanded tour (with info and picture), or just the tour name
            )
        );
    };


    useEffect(() => {
        fetch('https://www.course-api.com/react-tours-project') //fetch tours from API
            .then(response => response.json()) //turn API into JSON format
            .then(data => setTours(data)) //add tours to the tours array
            .catch(error => console.error('Error Fetching Tours:', error))
        }, []);

    return (
        <div>
            <h1>Tours</h1>
            <ul>
                {tours.map(tour => (
                    <li key={tour.id}>
                        {tour.name} - ${tour.price}
                        <br></br>
                        <br></br>
                        <button onClick={() => toggleExpanded(tour.id)}>{tour.expanded ?'Show Less':'Read More'}</button>
                        {tour.expanded && (  //when expanded, will show the tour info and the image
                            <>
                                <p>{tour.info}</p>
                                <img src={tour.image}></img>
                            </>
                        )}
                        <br></br>
                        <br></br>
                        <button onClick={() => notInterested(tour.id)}>Not Interested</button>
                        <p></p>
                        <br></br>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Gallery;