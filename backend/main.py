# main.py
# 서버 시작과 API들을 관리하는 파일?
from dotenv import load_dotenv
from starlette.responses import RedirectResponse

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from database import engine
from routers import users
import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# 환경변수 로드
load_dotenv()

app.include_router(users.router)
app.include_router(questions.router)
app.include_router(comments.router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 접속시 자동으로 문서페이지로 이동
@app.get("/")
def main():
    return RedirectResponse(url="/docs/")
