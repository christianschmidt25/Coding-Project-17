import React, { useState, useEffect } from 'react';

function Gallery() {
    const [tours, setTours] = useState([]); //sets tours as our initial variable, with the default tours being blank

    useEffect(() => {
        fetch('https://course-api.com/react-tours-project') //fetch tours from API
            .then(response => response.json()) //turn API into JSON format
            .then(data => setTours(data)); //add tours to the tours array
    }, []);
}