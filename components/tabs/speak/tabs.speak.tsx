import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export function TabsSpeak() {
  return (
    <Tabs defaultValue="pergunta" className=" w-full md:w-[80%]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="pergunta">Faça uma pergunta</TabsTrigger>
        <TabsTrigger value="precisa">O que precisa?</TabsTrigger>
      </TabsList>
      <TabsContent value="pergunta">
        <Card>
          <CardHeader>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Nome" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Exemplo@gmail.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="assunto">Assunto</Label>
              <Input id="assunto" placeholder="Assunto" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea id="mensagem" placeholder="Mensagem" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Enviar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="precisa">
        <Card>
          <CardHeader>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Nome" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Exemplo@gmail.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="assunto">Assunto</Label>
              <Input id="assunto" placeholder="Assunto" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea id="mensagem" placeholder="Mensagem" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Enviar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
