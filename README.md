# Personal Website

A place for me to play with Google App Engine. This is hosted live at http://miketwo.net

# Development

Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/).

Short version

```
sudo apt-get install apt-transport-https ca-certificates gnupg
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
sudo apt-get update && sudo apt-get install google-cloud-cli google-cloud-cli-app-engine-python google-cloud-cli-app-engine-python-extras google-cloud-cli-datastore-emulator

To start a development instance, run from the project root
```
dev_appserver.py .
```

To deploy, run the `deploy.sh` script.

# ToDo

 - 404 Page should be in the same style as the rest of the site
 - Unit tests

