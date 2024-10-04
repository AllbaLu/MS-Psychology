"""empty message

Revision ID: 404a856d234d
Revises: 
Create Date: 2024-09-04 08:12:03.760987

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '404a856d234d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('chatbot',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('frequently_ask', sa.String(length=100), nullable=False),
    sa.Column('relaxation_exercises', sa.String(length=100), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('frequently_ask'),
    sa.UniqueConstraint('relaxation_exercises')
    )
    op.create_table('manager',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('lastname', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('psychologist',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('lastname', sa.String(length=100), nullable=False),
    sa.Column('experience', sa.String(length=100), nullable=False),
    sa.Column('language', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('lastname', sa.String(length=100), nullable=False),
    sa.Column('birth_date', sa.Date(), nullable=True),
    sa.Column('gender', sa.Enum('male', 'female', 'none', name='gender_enum'), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('calendar',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('day', sa.Date(), nullable=False),
    sa.Column('month', sa.Integer(), nullable=False),
    sa.Column('hour', sa.Time(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('psychologist_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['psychologist_id'], ['psychologist.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('session_call',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('introductory', sa.Integer(), nullable=False),
    sa.Column('fullSession', sa.Integer(), nullable=False),
    sa.Column('sessionPackage_5', sa.Integer(), nullable=False),
    sa.Column('sessionPackage_10', sa.Integer(), nullable=False),
    sa.Column('user_session', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_session'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('sessionPackage_10'),
    sa.UniqueConstraint('sessionPackage_5')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('session_call')
    op.drop_table('calendar')
    op.drop_table('user')
    op.drop_table('psychologist')
    op.drop_table('manager')
    op.drop_table('chatbot')
    # ### end Alembic commands ###