import React from 'react'

const commentsData = [
    {
    name: "Humnashin Khan",
    text: "Loren lipson dolor sit amet, consectector adict.",
    replies: [
        {
            name: "Humnashin Khan",
            text: "Loren lipson dolor sit amet, consectector adict.",
            replies: [
                {
                    name: "Humnashin Khan",
                    text: "Loren lipson dolor sit amet, consectector adict.",
                    replies: [
                        {
                            name: "Humnashin Khan",
                            text: "Loren lipson dolor sit amet, consectector adict.",
                            replies: [
                                
                            ]
                           },
                        
                    ]
                   },
            ]
           },
           {
            name: "Humnashin Khan",
            text: "Loren lipson dolor sit amet, consectector adict.",
            replies: [
                {
                    name: "Humnashin Khan",
                    text: "Loren lipson dolor sit amet, consectector adict.",
                    replies: [
                        {
                            name: "Humnashin Khan",
                            text: "Loren lipson dolor sit amet, consectector adict.",
                            replies: [
                                {
                                    name: "Humnashin Khan",
                                    text: "Loren lipson dolor sit amet, consectector adict.",
                                    replies: [
                                        
                                    ]
                                   },
                            ]
                           },
                    ]
                   },
            ]
           },
    ]
   },
   {
    name: "Humnashin Khan",
    text: "Loren lipson dolor sit amet, consectector adict.",
    replies: [
        {
            name: "Humnashin Khan",
            text: "Loren lipson dolor sit amet, consectector adict.",
            replies: [
                {
                    name: "Humnashin Khan",
                    text: "Loren lipson dolor sit amet, consectector adict.",
                    replies: [
                        
                    ]
                   },
            ]
           },
           {
            name: "Humnashin Khan",
            text: "Loren lipson dolor sit amet, consectector adict.",
            replies: [
                {
                    name: "Humnashin Khan",
                    text: "Loren lipson dolor sit amet, consectector adict.",
                    replies: [
                        
                    ]
                   },
            ]
           },
    ]
   },
   {
    name: "Humnashin Khan",
    text: "Loren lipson dolor sit amet, consectector adict.",
    replies: [
        {
            name: "Humnashin Khan",
            text: "Loren lipson dolor sit amet, consectector adict.",
            replies: [
                
            ]
           },
           {
            name: "Humnashin Khan",
            text: "Loren lipson dolor sit amet, consectector adict.",
            replies: [
                
            ]
           },
           {
            name: "Humnashin Khan",
            text: "Loren lipson dolor sit amet, consectector adict.",
            replies: [
                
            ]
           },
    ]
   },
   {
    name: "Humnashin Khan",
    text: "Loren lipson dolor sit amet, consectector adict.",
    replies: [
        {
            name: "Humnashin Khan",
            text: "Loren lipson dolor sit amet, consectector adict.",
            replies: [
                
            ]
           },
           {
            name: "Humnashin Khan",
            text: "Loren lipson dolor sit amet, consectector adict.",
            replies: [
                
            ]
           },
    ]
   },
   {
    name: "Humnashin Khan",
    text: "Loren lipson dolor sit amet, consectector adict.",
    replies: [
        
    ]
   },
]

const Comment = ({ data }) => {
    const { name, text, replies } = data;
   return (
   <div className="flex shadow-sm bg-gray-100 rounded-lg p-2 my-2">
     <img
     className="w-12 h-12 rounded-full"
     alt="user" 
     src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
     />
     <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
     </div>
     </div>
     );
};

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
    <div key={index}>
     <Comment data={comment}/>
     <div className="pl-5 border border-l-black ml-5">
      <CommentsList comments={comment.replies}/>             
      </div>
     </div>
    ));
};


const CommentContainer = () => {
  return (
    <div className="p-5 m-5">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData}/>
        </div>
  )
}

export default CommentContainer