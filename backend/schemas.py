from pydantic import BaseModel




class User(BaseModel):
    id: int  # 자동 생성
    nickname: str  # 기본값 false
    email: str

    class Config:
        orm_mode = True

class Todo(BaseModel):
    id: int
    user_id: int
    task: str
    status: str

    class Config:
        orm_mode = True

class Routine(BaseModel):
    id: int
    todo_id: int
    day: str

    class Config:
        orm_mode = True