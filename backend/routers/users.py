from fastapi import APIRouter, Depends, Header, HTTPException
from sqlalchemy.orm import Session

import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
import schemas, crud
from database import get_db

router = APIRouter(
    prefix="/api/v1/users",
    tags=["users"],
)

# user 생성에 필요한 정보를 보내면 user를 생성한다.
@router.post('/', response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return crud.create_user(db, user=user)


# user_id를 path variable로 받아서 해당 user의 정보를 반환한다.
@router.get('/{user_id}', response_model=schemas.User)
def show_user(user_id: int, db: Session = Depends(get_db)):
    return crud.get_user(db, user_id=user_id)


# user_id를 path variable로 받아서 해당 유저를 delete한다.
@router.delete('/{user_id}', status_code=204)
def delete_user(user_id: int, db: Session = Depends(get_db)):
    return crud.delete_user(db=db, user_id=user_id)

# user 업데이트에 필요한 정보를 보내면 user 정보를 업데이트한다.
@router.put('/', response_model=schemas.User)
def update_user(user: schemas.User, db: Session = Depends(get_db)):
    return crud.update_user(db, user=user)