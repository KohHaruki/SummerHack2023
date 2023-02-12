FROM node:latest as build

WORKDIR /app
COPY ./scanner /app/scanner/
COPY ./server /app/server/
COPY ./requirements.txt /app/requirements.txt

RUN apt update
RUN apt install nodejs -y

WORKDIR /app/server

RUN npm install

ENV PYHTONUNBUFFERED=1
RUN apt-get update && apt-get install --yes python3
RUN apt-get update && apt-get -y install tesseract-ocr && apt-get -y install ffmpeg libsm6 libxext6
RUN apt-get -y install python3-pip

WORKDIR /app

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

WORKDIR /app/server

EXPOSE 8080

CMD ["npm", "run", "start"]