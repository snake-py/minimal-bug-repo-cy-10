set -o allexport; source .env; set +o allexport

if [[ -n "$1" ]]; then 
    echo "VUE_APP_ENVIRONMENT ($VUE_APP_ENVIRONMENT) was specified as an argument"
    export VUE_APP_ENVIRONMENT=$1
else
    set -o allexport; source .env.local; set +o allexport
    echo "ENV was not specified, using default from .env.local: $VUE_APP_ENVIRONMENT"
fi

if [[ $VUE_APP_ENVIRONMENT == "" ]]; then
    echo "ERROR: VUE_APP_ENVIRONMENT is not set"
    exit 1
fi

set -o allexport; source ./env/.env.$VUE_APP_ENVIRONMENT-test; set +o allexport
set -o allexport; source .env.local; set +o allexport

npx cypress open