#!/bin/bash -e

# Deploys the application to Google.
# You must already be logged in using gcloud auth login

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
gcloud --project=miketwo-original app deploy $DIR
