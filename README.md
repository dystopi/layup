# Layup Interview Challenge

# Documentation: 

## Task 1 - Airplane Control
Develop a basic application that simulates the control of an airplane on a 2D plane viewed from above. The airplane is assumed to be at a
constant cruising altitude. The application should allow users to control the airplane’s yaw angle (direction) and airspeed, and it should
dynamically update and display the airplane’s trajectory on a canvas as it moves.
We recommend spending at most 90 min on this task.
Requirements:
1. Airplane Controls:
a. Implement controls for adjusting the airplane’s yaw angle (in degrees) and airspeed (in knots)
b. The user should be able to input these controls via a simple user interface
2. Trajectory Visualization:
a. Draw the airplane’s trajectory on a canvas element (or equivalent) as a continuous line that updates in real-time as the airplane
moves
b. The trajectory should start from an initial position, and each change in direction or speed should be reflected in the path
c. Choose your own solution to the edges of the canvas
Deliverables:
A working application with a canvas or similar element that visualizes the airplane’s trajectory
A simple UI for adjusting the yaw angle and airspeed
Basic documentation that explains how to run the application and describes the logic behind the trajectory calculations

### Running
The app is setup to run with `npm start` or `yarn start` and you should be navigated to port 3000 on the localhost. 

### Trajectory Logic
The trajectory calculations are accomplished by computing movement
offsets in the x,y direction based on the airplanes yaw angle and
airspeed. The Yaw is a value between -180 and 180. They are converted to
radians and we multiply the sine and cosine by the airspeed,
scaled by a factor of 50 (see comment in code) These are added to the
airplanes current position

### Edge Problem
The edge problem is solved by the background grid. The ariplane stays
anchored in the center, and the background is redrawn along the inverse
trajectory of the aircraft, giving the illusion of movement. Note, the
Background and the Trail are not mapped 1-1. The background is meant to
give the feeling of directional movement, the trail records the factual
data

### Saftey
The Grid is constantly being redrawn and calculating the viewable area,
so it's memory footprint remains constant. The Trail is capped at 100
historical vectors as well to prevent memory overflow

## Task 2 - Layup Sequence
Implement an algorithm to compute the value of the Layup Sequence at
The sequence is defined as follows:

-- See PDF

We recommend spending at most 30 min on this task.
Requirements:
1. Algorithm Implementation:
a. Implement the sequence computation function based on the given recurrence relation
b. The function should efficiently compute the value of
2. Performance Evaluation:
a. Measure the runtime of your implementation.
b. Determine the time complexity of your solution.
c. If possible, optimize the solution to reduce the computational overhead.

3. Explanation:
a. Provide a short explanation of the time complexity of your algorithm. You should provide a plot of N vs Runtime to backup your
reasoning.
b. Discuss any optimizations applied and how they impact the runtime.
Deliverables:
A program or script that computes
A report (could be a comment in the code) discussing the runtime, time complexity, and any optimizations made.

### Running
The app is setup to run with `npm start` or `yarn start` and you should be navigated to port 3000 on the localhost. At the top
there are 2 links, click the `Layup Sequence` link

### Time complexity
The algorithm as is presented is highly inefficient coming in at O(2^N) as for each iteration, we're shooting off a recursive path
that must calculate the depth from itself downwards. 

The solution to this issue is to cache / memoize the result for each pass, allowing each 'recursive' call to simply return the previously
calculated output to the top level. This results in an increase in space complexity, but that is reasonable in this case as we are able
to process n=10000 in O(N) time.


# React Boilerplate Docs
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
