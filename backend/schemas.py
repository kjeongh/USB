from pydantic import BaseModel


class UserCreate(BaseModel):
    nickname: str  # 기본값 false
    email: str

class User(UserCreate):
    id: int  # 자동 생성
    class Config:
        orm_mode = True

class TodoCreate(BaseModel):
    user_id: int
    task: str
    status: str

class Todo(TodoCreate):
    id: int
    class Config:
        orm_mode = True

class Routine(BaseModel):
    id: int
    todo_id: int
    day: str

    class Config:
        orm_mode = True