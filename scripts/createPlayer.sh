#!/bin/bash

source ../.env

SCRIPT_MODE=${SCRIPT_MODE:-production}
HOST=${API_BASE_URL}

call_api() {
  response=$(curl -s -X POST "$HOST/api/v1/players" \
  -d "{\"phoneNumber\": \"$1\", \"email\": \"$2\", \"name\": \"$3\"}" \
  -H "Content-Type: application/json")

  if echo "$response" | grep -q "successfully" && [ "$SCRIPT_MODE" != "development" ]; then
      echo "Player $3 created!"
  elif [ "$SCRIPT_MODE" == "development" ]; then
      echo "Response:"
      echo "$response"
  else
      echo "Error creating player $3"
      echo "$response"
  fi
}

echo "Create a new player"

read -r -p "Phone Number: " PHONE_NUMBER
read -r -p "Email Address: " EMAIL_ADDRESS
read -r -p "Name: " NAME

if [[ -z "$PHONE_NUMBER" ]] || [[ -z "$EMAIL_ADDRESS" ]] || [[ -z "$NAME" ]]; then
  echo "Please fill in all information."
  exit 1
elif ! [[ "$PHONE_NUMBER" =~ ^[0-9]+$ ]]; then
  echo "Phone Number should only contain digits."
  exit 1
elif ! [[ "$EMAIL_ADDRESS" =~ .*@.*\..* ]]; then
  echo "Invalid Email Address format."
  exit 1
fi

call_api "$PHONE_NUMBER" "$EMAIL_ADDRESS" "$NAME"
