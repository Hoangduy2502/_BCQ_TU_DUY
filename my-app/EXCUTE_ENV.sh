if [ $1 == "prod" ]; then 
    cp ENV/.env.production .env
elif [ $1 == "dev" ]; then 
    cp ENV/.env.development .env
fi