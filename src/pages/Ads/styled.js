import styled from 'styled-components';

export const PageArea = styled.div `
    display:flex;
    margin-top:20px;

    .leftSide{
        width:250px;
        magin-right:10px;

        .filterName{
            font-size:15px;
            margin:10px 0;
        }

        input,select{
            width:100%;
            height:40px;
            border:2px solid #9BBB3C;
            border-radius:5px;
            outline:0;
            color:#000;
            padding:10px;
        }

        ul,li{
            margin:0px;
            padding:0px;
            list-style:none;
        }
        .categoryItem{
            display:flex;
            align-items:center;
            padding:10px;
            border-radius:5px;
            color:#000;
            cursor:pointer;

            img{
                width:25px;
                height:25px;
                margin-rigth:5px;
            }
            span{
                font-size:14px;
            }
        }

        .categoryItem:hover, 
        .categoryItem.active{
            background-color:#99BB83C;
            color:#FFF;
        }
    }

    .rightSide{
       flex:1;
       
       h2{
           margin-top:0px;
           font-size:18px;
       }

       .listWarning{
           padding:30px;
           text-align:center;
       }

       .list{
           display:flex;
           flex-wrap:wrap;

           .aditem{
               width:33%;
           }

       }

       .pagination{
           display:flex;
           align-items:center;
           justify-content:center;
           margin:10px 0;
           flex-wrap:wrap;

        .pagItem{
            width:30px;
            heigth:30px;
            border:1px solid #000;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:14px;
            margin-right:5px;
            cursor:pointer;

            &:hover{
                border:1px solid #999;  
            }
            &.active{
                bacground-color: #CCC;
            }
        }
       }
    }
`;