FROM python:3.10
# This prevents Python from writing out pyc files
ENV PYTHONDONTWRITEBYTECODE 1
# This keeps Python from buffering stdin/stdout
ENV PYTHONUNBUFFERED 1

WORKDIR /backend
COPY requirements.txt /backend/
RUN apt-get update
RUN apt-get install -y python3 pip
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . /backend/

# COPY wait-for-it.sh wait-for-it.sh
# RUN chmod +x wait-for-it.sh
# CMD ./wait-for-it.sh db:3306 -s -t 50 -- uvicorn --host=backend --port 8000 main:app --reload
