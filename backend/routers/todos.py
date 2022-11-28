from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
import schemas, crud
from database import get_db

router = APIRouter(
    prefix="/api/v1/todos",
    tags=["todos"],
)

# todo 생성에 필요한 정보를 보내면 todo를 생성한다.
@router.post('/', response_model=schemas.Todo)
def create_todo(todo: schemas.TodoCreate, db: Session = Depends(get_db)):
    return crud.create_todo(db, todo=todo)


# user_id를 path variable로 받아서 해당 user의 todo를 반환한다.
@router.get('/{todo_id}', response_model=schemas.Todo)
def show_todo(user_id: int, db: Session = Depends(get_db)):
    return crud.get_todo(db, user_id=user_id)


# todo 업데이트에 필요한 정보를 보내면 todo 정보를 업데이트한다.
@router.put('/', response_model=schemas.Todo)
def update_user(todo: schemas.Todo, db: Session = Depends(get_db)):
    return crud.update_todo(db, todo=todo)