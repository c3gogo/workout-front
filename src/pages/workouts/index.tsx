import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'




export function getServerSideProps() {
    return {
      props: { data: [
        {
            _id: uuidv4(),
            Name: 'Push',
            Rest: 120,
            Exercices: [
                {
                    _id: uuidv4(),
                    Name: "Dumbell Bench Press",
                    Rest: 90,
                    Series: 3,
                    Reps: 12,
                    Weight: 24
                },
                {
                    _id: uuidv4(),
                    Name: "Inclined Dumbell Bench Press",
                    Rest: 90,
                    Series: 3,
                    Reps: 12,
                    Weight: 24
                },
            ]
        },
        {
            _id: uuidv4(),
            Name: 'Pull',
            Rest: 120,
            Exercices: [
                {
                    _id: uuidv4(),
                    Name: "Traction",
                    Rest: 90,
                    Series: 3,
                    Reps: 12,
                    Weight: 24
                }
            ]
        }
      ]}
    }
  }


interface Workout {
    _id: string;
    Name: string,
    Rest: number,
    Exercices: Exercice[]
}

interface Exercice {
    _id: string,
    Name: string,
    Rest: number,
    Series: number,
    Reps: number,
    Weights: number
}

type WorkoutsPage = {
    data: Workout[]
}

export default function WorkoutsPage ({ data }: WorkoutsPage) {
    const [selectedWorkout, setSelectedWorkout] = useState()
  return (
    <div className='h-screen bg-slate-200'>
        <>
            <div className="container mx-auto px-4">
                <div className="p-4 border-2  border-slate-200 rounded-xl bg-slate-200">
                <h1 className="text-center font-sans text-3xl">Workouts</h1>
                </div>
                <ul>
                    {data.length && data.map((workout: any) => {
                        return (
                            <div key={workout.uuid} className="p-6 max-w-sm mx-auto my-2 bg-white rounded-xl shadow-lg flex justify-around items-center text-center space-x-4 hover:bg-slate-300" onClick={
                                () => setSelectedWorkout(workout.uuid)
                            }>
                                <div className="text-2xl">
                                    {workout.Name}
                                </div>
                                <div>
                                    <div className="text-xl font-medium text-black">Rest</div>
                                    <p className="text-slate-500">{workout.Rest}</p>
                                </div>
                                <div>   
                                    <div className="text-xl font-medium text-black">Exercices</div>
                                    <p className="text-slate-500">{workout.Exercices.length}</p>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </>
    </div>
  )
}
