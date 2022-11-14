from sqlalchemy import Column, Integer, String, ForeignKey, MetaData
from sqlalchemy.orm import relationship

from database import Base

metadata = MetaData()


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, autoincrement=True)
    nickname = Column(String(20)) # 인스타 에서 관리하는 숫자형태의 id, user 구분을 위해 사용
    email = Column(String(30)) # 인스타 에서 관리하는 숫자형태의 id, user 구분을 위해 사용

    def __init__(self, user: schemas.UserCreate):
        self.nickname = user.nickname
        self.email = user.email
    # user - question 1:N 관계 설정
    user_todo = relationship("Todo")



class Todo(Base):
    __tablename__ = "todo"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    task = Column(String(30))
    status = Column(String(20))

    def __init__(self, question: schemas.TodoCreate):
        self.user_id = question.user_id
        self.status = Todo.status

    todo_routine = relationship("Todo")

class Routine(Base):
    __tablename__ = "routine"

    id = Column(Integer, primary_key=True, autoincrement=True)
    day = Column(String[20])
    todo_id = Column(Integer, ForeignKey("question.id"))

    def __init__(self, routine: schemas.RoutineCreate):
        self.day = routine.day
        self.todo_id = routine.todo_id

