### Developing Locally (Steps 1-3 should only need to be done once)
1. If you haven't already, download [MAMP](https://www.mamp.info/en/downloads/). Open MAMP, not MAMP Pro.
2. In MAMP, click Preferences > Server > Choose. Select the root directory of this git repo (i.e. the directory this README file is located in).
3. Next, navigate to the Ports tab. Ensure that your Apache port is set to 8888. Click OK.
4. Select Apache as your web server and click Start.
5. This should open up localhost:8888/MAMP in your browser. Navigate to locahost:8888. The React project should appear.
6. Now in terminal in the `app` directory, run `npm run watch`. This instructs webpack to generate a build every time you hit save. You should see your changes in real time.
7. Verify that the `HOST` variable in `CONST.js` is set to `'localhost:8888/'` (don't forget the slash).

### Deploying to EC2 (only ONE of us should do this at once with the MOST UP TO DATE version of the code)
1. Use Phil's instructions to SSH into the whatever EC2 instance we're deploying to.
2. In `CONST.js`, change the `HOST` variable to be an empty string `''`.
3. In the `app` directory run `npm run build`. If you were already running `npm run watch` this shouldn't be necessary, but better safe than sorry.
4. This is kinda jank, but open up the root directory of your local git repo in Finder (or whatever file browser your OS uses). Drag `./app/assets` (this is the production build of the React front-end) into the `app` folder in your sidebar of the SSH'd window. Also drag over any relevant PHP files that were updated.
5. Navigate to the EC2 URL (i.e. http://ec2-3-101-31-127.us-west-1.compute.amazonaws.com/). Your changes should be there.
