import './App.css'
import Form from './components/Form'
// import A from './components/A'

function App() {
    
    return (
        <main className='flex w-2/4 absolute inset-x-2/4 inset-y-2/4 translate-x-[-50%] translate-y-[-50%] bg-red-300'>
            <aside>
                <h1 className='text-[2rem]'>Learn to code by <br/> watching others</h1>
                <p>"See how experienced developers solve problems in real-time. <br/> Watching scripted tutorials is great, but understanding how <br/>developers think is invaluable."</p>
            </aside>
            <section>
                <div className='bg-blue'><strong>Try it free 7 days</strong> then $20/mo. thereafter</div>
                <Form />
            </section>
            {/* <A /> */}
        </main>
    );
}

export default App;
