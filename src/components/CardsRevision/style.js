import styled from 'styled-components'

export const Container = styled.li`
  width: 100%;
  height: 120px;
  display: flex;
  border: 1px solid #dddfe2;
  border-radius: 5px;
  margin-top: 20px;

  :hover {
    border: 1px solid #ccc;
  }
`

export const ImgContainer = styled.div`
  width: 30%;

  > img {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
`

export const TextContainer = styled.div`
  width: 70%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const UserDateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    font-size: 14px;
    font-weight: regular;
  }

  > p {
    font-size: 12px;
    color: var(--gray-color);
  }
`
export const TitleTextContainer = styled.div`
  width: 100%;
  text-align: left;

  > h3 {
    font-size: 16px;
    font-weight: 500;
  }
`

export const TemeContainer = styled.div`
  padding: 5px;
  width: 15%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  text-align: center;

  > span {
    font-size: 12px;
    color: #fff;
    font-weight: regular;
  }
`
