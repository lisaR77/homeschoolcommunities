echo "Switching to branch master"
git checkout feat/deploy-lecture

echo "Building app...."
npm run build

echo "Deploying files to server..."
scp -r build/* hautestyle@68.178.207.95:/var/www/68.178.207.95/

echo "Done!"
