import HomeWidget from "@/components/HomeWidget";

const states=[
  {
    state:'Madhya Pradesh',
    active:true,
    results:[
      {
        party:'BJP',
        color:'#ff9900',
        slides:[
          {
            title:'Seats',
            value:'80'
          },
          {
            title:'Vote %',
            value:'40 %'
          },
          {
            title:'Seats to Win',
            value:'200'
          },
          {
            title:'(+/-) 2018',
            value:'260'
          },
        ]
      },
      {
        party:'INC',
        color:'#33adff',
        slides:[
          {
            title:'Seats',
            value:'80'
          },
          {
            title:'Vote %',
            value:'40 %'
          },
          {
            title:'Seats to Win',
            value:'200'
          },
          {
            title:'(+/-) 2018',
            value:'260'
          },
        ]
      },
      {
        party:'JDS',
        color:'#33cc33',
        slides:[
          {
            title:'Seats',
            value:'80'
          },
          {
            title:'Vote %',
            value:'40 %'
          },
          {
            title:'Seats to Win',
            value:'200'
          },
          {
            title:'(+/-) 2018',
            value:'260'
          },
        ]
      },
      {
        party:'OTHERS',
        color:'#6600ff',
        slides:[
          {
            title:'Seats',
            value:'80'
          },
          {
            title:'Vote %',
            value:'40 %'
          },
          {
            title:'Seats to Win',
            value:'200'
          },
          {
            title:'(+/-) 2018',
            value:'260'
          },
        ]
      }
    ]
  },
  {
    state:'Rajasthan',
    active:false,
    results:[
      {
        party:'BJP',
        color:'#ff9900',
        slides:[
          {
            title:'Seats',
            value:'80'
          },
          {
            title:'Vote %',
            value:'40 %'
          },
          {
            title:'Seats to Win',
            value:'200'
          },
          {
            title:'(+/-) 2018',
            value:'260'
          },
        ]
      },
      {
        party:'INC',
        color:'#33adff',
        slides:[
          {
            title:'Seats',
            value:'80'
          },
          {
            title:'Vote %',
            value:'40 %'
          },
          {
            title:'Seats to Win',
            value:'200'
          },
          {
            title:'(+/-) 2018',
            value:'260'
          },
        ]
      },
      {
        party:'JDS',
        color:'#33cc33',
        slides:[
          {
            title:'Seats',
            value:'80'
          },
          {
            title:'Vote %',
            value:'40 %'
          },
          {
            title:'Seats to Win',
            value:'200'
          },
          {
            title:'(+/-) 2018',
            value:'260'
          },
        ]
      },
      {
        party:'OTHERS',
        color:'#6600ff',
        slides:[
          {
            title:'Seats',
            value:'80'
          },
          {
            title:'Vote %',
            value:'40 %'
          },
          {
            title:'Seats to Win',
            value:'200'
          },
          {
            title:'(+/-) 2018',
            value:'260'
          },
        ]
      }
    ]
  },
  {
    state:'Chhattisgarh',
    active:false,
    results:[
      {
        party:'BJP',
        color:'#ff9900',
        slides:[
          {
            title:'Seats',
            value:'80'
          },
          {
            title:'Vote %',
            value:'40 %'
          },
          {
            title:'Seats to Win',
            value:'200'
          },
          {
            title:'(+/-) 2018',
            value:'260'
          },
        ]
      },
      {
        party:'INC',
        color:'#33adff',
        slides:[
          {
            title:'Seats',
            value:'80'
          },
          {
            title:'Vote %',
            value:'40 %'
          },
          {
            title:'Seats to Win',
            value:'200'
          },
          {
            title:'(+/-) 2018',
            value:'260'
          },
        ]
      },
      {
        party:'JDS',
        color:'#33cc33',
        slides:[
          {
            title:'Seats',
            value:'80'
          },
          {
            title:'Vote %',
            value:'40 %'
          },
          {
            title:'Seats to Win',
            value:'200'
          },
          {
            title:'(+/-) 2018',
            value:'260'
          },
        ]
      },
      {
        party:'OTHERS',
        color:'#6600ff',
        slides:[
          {
            title:'Seats',
            value:'80'
          },
          {
            title:'Vote %',
            value:'40 %'
          },
          {
            title:'Seats to Win',
            value:'200'
          },
          {
            title:'(+/-) 2018',
            value:'260'
          },
        ]
      }
    ]
  },
]
export default function Home() {

  
  return (
    <HomeWidget states={states} />
  )
}
