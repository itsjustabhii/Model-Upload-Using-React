"# Upload-3D-model-using-React" 

## Backend

### Setting up of environment

Setting up of virtual environment
Use anaconda's ``conda`` environments or ``virtualenv``

#### Creation of virtualenv with python
``
virtualenv venv
``

#### Activation of virtualenv
``
source venv/bin/activate
``

Once the virtualenv is activated, go ahead with the installation of the libraries


Use the requirements.txt to install the pre-requisites mentioned for the project
``
pip install -r requirements.txt
``

Use the following command to start the backend Django server
``
python manage.py runserver
``

Once started the project runs on a standard Django ``port 8000`` Keep the project running and move to frontend folder in the command line with ``cd frontend``

## Frontend
The ``package.json`` has all the libraries necessary for the react application to run.
Run the following command mentioned to install the packages into ``node_modules``

``npm install``

To run the project use

``npm run start``

The project runs on standard React ``port 3000``


Process:

1) Upload the files from file upload control to server from the GUI

2) The files are uploaded into the server backend folder i.e. media folder and served as ``static`` files from the backend.
The url the backend uses to serve the files is: ``http://localhost:8000/static/post_images/P7.glb``

3) The files loaded from the same static url via a ``GLTFLoader`` in the to serve the ``.glb`` files. The ``.glb`` files get rendered via the ``canvas`` tag of ``HTML5`` with the ``scene, camera, positioning, scale and rendering`` techniques provided by the ``WebGL1Renderer`` of ``Three.js`` file accordingly.

Note:
Due to the positioning issue the loaded file is not showing up in correct position in the x/y/z axes therefore I have introdced a log statement in the console of the browser which can be detected upon ``Inspect Element``






## Other Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
